import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { storeName, bannerText, slug, userId } = await req.json();

    if (!storeName || !slug || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingSlug = await prisma.store.findUnique({ where: { slug } });

    if (existingSlug) {
      return NextResponse.json({ error: "Slug is already taken." }, { status: 409 });
    }

    console.log("📦 Creating store for userId:", userId);

    const store = await prisma.store.create({
      data: { userId, storeName, bannerText, slug },
    });
    console.log("✅ Store created:", store);

    await prisma.user.update({
      where: { id: userId },
      data: { isOnboarded: true },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[ONBOARDING_ERROR]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
