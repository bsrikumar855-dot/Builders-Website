import os
import shutil

# Paths
brain_dir = r"C:\Users\babus\.gemini\antigravity\brain\698e9ebf-742e-4d04-aaa1-2e8062a4c973"
public_dir = r"d:\Builder Website\Builders-Website\public"

# Target directories
dirs = [
    os.path.join(public_dir, "images"),
    os.path.join(public_dir, "images", "services"),
    os.path.join(public_dir, "images", "areas"),
    os.path.join(public_dir, "images", "projects"),
]

# Create directories
for d in dirs:
    os.makedirs(d, exist_ok=True)

# Generated source images
hero_src = os.path.join(brain_dir, "hero_bg_1784360304479.png")
board_src = os.path.join(brain_dir, "distribution_board_1784360314945.png")
leak_src = os.path.join(brain_dir, "pipe_leak_1784360325746.png")

# Fallback source if one of them is missing (use the first available)
sources = [hero_src, board_src, leak_src]
available_src = None
for s in sources:
    if os.path.exists(s):
        available_src = s
        break

if not available_src:
    print("No generated source images found! Please make sure the brain path is correct.")
    exit(1)

# Mapping of target paths
mappings = {
    # General
    os.path.join(public_dir, "images", "hero-bg.jpg"): hero_src if os.path.exists(hero_src) else available_src,
    os.path.join(public_dir, "images", "og-image.jpg"): hero_src if os.path.exists(hero_src) else available_src,
    os.path.join(public_dir, "images", "logo.png"): board_src if os.path.exists(board_src) else available_src,
    
    # Services
    os.path.join(public_dir, "images", "services", "house-wiring.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "services", "distribution-board.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "services", "earthing-protection.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "services", "power-socket.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "services", "cctv-smart-home.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "services", "generator-ups.jpg"): board_src if os.path.exists(board_src) else available_src,
    
    os.path.join(public_dir, "images", "services", "pipe-leak.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "services", "bathroom-plumbing.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "services", "water-tank.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "services", "drain-cleaning.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "services", "water-heater.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "services", "commercial-plumbing.jpg"): leak_src if os.path.exists(leak_src) else available_src,

    # Areas
    os.path.join(public_dir, "images", "areas", "rs-puram.jpg"): hero_src if os.path.exists(hero_src) else available_src,
    os.path.join(public_dir, "images", "areas", "gandhipuram.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "areas", "saravanampatti.jpg"): hero_src if os.path.exists(hero_src) else available_src,
    os.path.join(public_dir, "images", "areas", "singanallur.jpg"): board_src if os.path.exists(board_src) else available_src,

    # Projects
    os.path.join(public_dir, "images", "projects", "villa-rewire-rs-puram.jpg"): hero_src if os.path.exists(hero_src) else available_src,
    os.path.join(public_dir, "images", "projects", "villa-rewire-board.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "projects", "office-fitout-gandhipuram.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "projects", "office-fitout-panel.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "projects", "apartment-plumbing-saravanampatti.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "projects", "factory-earthing-singanallur.jpg"): board_src if os.path.exists(board_src) else available_src,
    os.path.join(public_dir, "images", "projects", "hotel-plumbing-gandhipuram.jpg"): leak_src if os.path.exists(leak_src) else available_src,
    os.path.join(public_dir, "images", "projects", "smart-villa-saravanampatti.jpg"): hero_src if os.path.exists(hero_src) else available_src,
}

# Copy files
for target, src in mappings.items():
    if os.path.exists(src):
        shutil.copy2(src, target)
        print(f"Copied {os.path.basename(src)} to {os.path.relpath(target, public_dir)}")
    else:
        print(f"Source not found for {target}: {src}")

print("Image setup completed successfully!")
