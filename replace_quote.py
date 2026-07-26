import sys

def modify_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # For app/quote/page.tsx
    if "quote" in filepath and "security" not in filepath:
        old_str = """          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl px-5 py-3 text-sm font-semibold">
            For electrical faults, burst pipes, or emergencies — call us immediately:{" "}
            <a href={`tel:${siteConfig.phone}`} className="text-red-900 font-bold underline hover:no-underline ml-1">
              {siteConfig.phone}
            </a>
          </div>"""
        
        new_str = """          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 rounded-xl px-5 py-3 text-sm font-semibold text-left">
            <div>
              For electrical faults, burst pipes, or emergencies — call us immediately:{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-red-900 font-bold underline hover:no-underline ml-1">
                {siteConfig.phone}
              </a>
              <p className="text-xs font-normal opacity-90 mt-1">Licence No: {siteConfig.licence}</p>
            </div>
          </div>"""
        
        content = content.replace(old_str, new_str)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    modify_file(sys.argv[1])
