#!/usr/bin/env python3
"""
Generate gizakura-lockup.png  — logo + "Gizakura" wordmark side by side.
Also produce icon.png (32x32) for the browser favicon.
"""

from PIL import Image, ImageDraw, ImageFont
import os, shutil

# ── paths ──────────────────────────────────────────────────────────────────
ROOT    = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BRAND   = os.path.join(ROOT, "public", "brand")
LOGO_QL = "/tmp/gizakura-logo.svg.png"   # rasterised by qlmanage earlier

# ── design tokens (match the website palette) ───────────────────────────────
BG_DARK  = (26, 25, 23)          # var(--bg-dark) footer background
FG_LIGHT = (249, 233, 229)       # var(--fg-on-dark) / logo bg tint
ROSE     = (196,  92, 106)       # petal accent  #c45c6a

# ── sizes ──────────────────────────────────────────────────────────────────
ICON_SIZE   = 32    # px square for browser favicon
LOGO_H      = 56    # logo icon height inside lockup
GAP         = 14    # gap between icon and wordmark
FONT_SIZE   = 46    # wordmark font size
PAD_V       = 20    # vertical padding
PAD_H       = 24    # horizontal padding

# ── load + resize logo ──────────────────────────────────────────────────────
logo_raw = Image.open(LOGO_QL).convert("RGBA")
aspect   = logo_raw.width / logo_raw.height
logo_w   = round(LOGO_H * aspect)
logo_img = logo_raw.resize((logo_w, LOGO_H), Image.LANCZOS)

# ── try to load a system font close to Figtree / sans-serif ────────────────
FONT_CANDIDATES = [
    "/System/Library/Fonts/SFNS.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Arial.ttf",
    "/Library/Fonts/Arial.ttf",
]
font = None
for fc in FONT_CANDIDATES:
    if os.path.exists(fc):
        try:
            font = ImageFont.truetype(fc, FONT_SIZE)
            break
        except Exception:
            pass
if font is None:
    font = ImageFont.load_default()

# ── measure wordmark ────────────────────────────────────────────────────────
TEXT    = "Gizakura"
tmp_img = Image.new("RGBA", (1, 1))
tmp_draw= ImageDraw.Draw(tmp_img)
bb      = tmp_draw.textbbox((0, 0), TEXT, font=font)
text_w  = bb[2] - bb[0]
text_h  = bb[3] - bb[1]

# ── canvas dimensions ───────────────────────────────────────────────────────
inner_h = max(LOGO_H, text_h)
canvas_w = PAD_H + logo_w + GAP + text_w + PAD_H
canvas_h = PAD_V + inner_h + PAD_V

# ── draw lockup (dark version — matches footer) ─────────────────────────────
img  = Image.new("RGBA", (canvas_w, canvas_h), (*BG_DARK, 255))
draw = ImageDraw.Draw(img)

# logo centred vertically
logo_y = PAD_V + (inner_h - LOGO_H) // 2

# For the dark version, invert the logo (brightness-0 invert = white silhouette)
logo_inv = logo_img.copy()
r, g, b, a = logo_inv.split()
from PIL import ImageOps
rgb = Image.merge("RGB", (r, g, b))
rgb = ImageOps.invert(rgb)
logo_inv = Image.merge("RGBA", (*rgb.split(), a))

img.paste(logo_inv, (PAD_H, logo_y), logo_inv)

# wordmark centred vertically
text_y = PAD_V + (inner_h - text_h) // 2 - bb[1]
draw.text((PAD_H + logo_w + GAP, text_y), TEXT, font=font, fill=(*FG_LIGHT, 255))

# ── save lockup ─────────────────────────────────────────────────────────────
out_lockup = os.path.join(BRAND, "gizakura-lockup.png")
img.save(out_lockup, "PNG")
print(f"✓ lockup (dark)  → {out_lockup}  ({canvas_w}×{canvas_h})")

# ── light version for nav ────────────────────────────────────────────────────
img_light = Image.new("RGBA", (canvas_w, canvas_h), (255, 255, 255, 0))
draw_l = ImageDraw.Draw(img_light)
img_light.paste(logo_img, (PAD_H, logo_y), logo_img)
draw_l.text((PAD_H + logo_w + GAP, text_y), TEXT, font=font, fill=(26, 25, 23, 255))
out_light = os.path.join(BRAND, "gizakura-lockup-light.png")
img_light.save(out_light, "PNG")
print(f"✓ lockup (light) → {out_light}  ({canvas_w}×{canvas_h})")

# ── favicon: square icon only (just the rose petal icon, no text) ───────────
icon_img = logo_raw.resize((ICON_SIZE, ICON_SIZE), Image.LANCZOS)
out_icon = os.path.join(ROOT, "public", "icon.png")
icon_img.save(out_icon, "PNG")
# Also copy to src/app for Next.js app-dir favicon
app_icon = os.path.join(ROOT, "src", "app", "icon.png")
shutil.copy(out_icon, app_icon)
print(f"✓ favicon        → {out_icon}  ({ICON_SIZE}×{ICON_SIZE})")
print(f"✓ app icon       → {app_icon}")
print("Done.")
