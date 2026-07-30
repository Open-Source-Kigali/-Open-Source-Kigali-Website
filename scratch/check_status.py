import subprocess

def run_cmd(cmd):
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return res.stdout, res.stderr
    except subprocess.CalledProcessError as e:
        return "", f"Error running {' '.join(cmd)}: {e.stderr}\nStdout: {e.stdout}"
    except Exception as e:
        return "", str(e)

output_path = "/home/honore/.gemini/antigravity/brain/8012f65c-d8cill-418b-947f-9748207415a6/scratch/status_report.txt"

stdout, stderr = run_cmd(["git", "status"])

with open(output_path, "w") as f:
    f.write("=== Git Status ===\n")
    f.write(stdout)

print("Status check done.")
