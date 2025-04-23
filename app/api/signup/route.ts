import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing email or password" }), { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 409 });
    }

    const hashedPassword = await hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (_error) {
    console.error("Error during signup:", _error);
    //return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
