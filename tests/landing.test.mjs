import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const landingPath = path.resolve(rootDir, "../app/page.tsx");

async function readLandingPage() {
  return readFile(landingPath, "utf8");
}

test("landing page menampilkan semua heading utama", async () => {
  const source = await readLandingPage();
  const headings = [
    "Varietas Unggulan",
    "Keunggulan Farm",
    "Cara Beli",
    "Testimoni",
    "Galeri Kolam",
    "Kunjungi Farm",
  ];

  for (const heading of headings) {
    assert.match(
      source,
      new RegExp(heading, "u"),
      `Heading ${heading} tidak ditemukan di page.tsx`,
    );
  }
});

test("template WhatsApp mengikuti format yang disyaratkan", async () => {
  const source = await readLandingPage();
  const numberMatch = source.match(/const WHATSAPP_NUMBER = "(\d+)";/u);
  assert.ok(numberMatch, "Nomor WhatsApp tidak ditemukan");
  const templateMatch = source.match(
    /const WHATSAPP_TEMPLATE =\s*\n\s+"([^"]+)";/u,
  );
  assert.ok(templateMatch, "Template WhatsApp tidak ditemukan");

  const [, number] = numberMatch;
  const [, template] = templateMatch;

  assert.equal(number.startsWith("62"), true, "Nomor WhatsApp wajib format internasional Indonesia");
  assert.match(
    template,
    /koi premium/iu,
    "Template perlu menyebut koi premium untuk konteks katalog",
  );

  const expectedEncoded = encodeURIComponent(template);
  assert.equal(
    expectedEncoded.includes("%20"),
    true,
    "Pesan harus ter-encode dengan spasi menjadi %20",
  );
});

test("hero section memiliki minimal tiga statistik", async () => {
  const source = await readLandingPage();
  const statsMatch = source.match(/const heroStats = \[/u);
  assert.ok(statsMatch, "heroStats tidak ditemukan");

  const statCount = (source.match(/label: "/gu) ?? []).length;
  assert.ok(statCount >= 3, "heroStats minimal tiga item");
});
