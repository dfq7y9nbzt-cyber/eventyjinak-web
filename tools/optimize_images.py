from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "assets" / "images"
JPEG_EXTENSIONS = {".jpg", ".jpeg"}
MAX_LONG_EDGE = 3600
JPEG_QUALITY = 84


def iter_images() -> list[Path]:
    return sorted(
        path
        for path in IMAGE_DIR.rglob("*")
        if path.is_file() and path.suffix.lower() in JPEG_EXTENSIONS
    )


def format_mb(size: int) -> str:
    return f"{size / (1024 * 1024):.2f} MB"


def optimize_image(path: Path) -> tuple[int, int, bool]:
    before = path.stat().st_size
    changed = False

    with Image.open(path) as source:
        image = ImageOps.exif_transpose(source)
        image = image.convert("RGB")

        width, height = image.size
        long_edge = max(width, height)
        if long_edge > MAX_LONG_EDGE:
            scale = MAX_LONG_EDGE / long_edge
            new_size = (round(width * scale), round(height * scale))
            image = image.resize(new_size, Image.Resampling.LANCZOS)
            changed = True

        image.save(
            path,
            format="JPEG",
            quality=JPEG_QUALITY,
            optimize=True,
            progressive=True,
        )

    after = path.stat().st_size
    if after != before:
        changed = True

    return before, after, changed


def main() -> None:
    images = iter_images()
    total_before = 0
    total_after = 0
    changed_count = 0

    print(f"Optimizing {len(images)} JPEG images in {IMAGE_DIR}")
    for path in images:
        before, after, changed = optimize_image(path)
        total_before += before
        total_after += after
        if changed:
            changed_count += 1
        print(f"{path.name}: {format_mb(before)} -> {format_mb(after)}")

    delta = total_before - total_after
    print("")
    print(f"Processed: {len(images)}")
    print(f"Changed: {changed_count}")
    print(f"Before: {format_mb(total_before)}")
    print(f"After:  {format_mb(total_after)}")
    print(f"Saved:  {format_mb(delta)}")


if __name__ == "__main__":
    main()
