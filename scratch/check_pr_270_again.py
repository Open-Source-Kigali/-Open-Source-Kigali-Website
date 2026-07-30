import subprocess

def run_cmd(cmd):
    try:
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return res.stdout, res.stderr
    except subprocess.CalledProcessError as e:
        return "", f"Error running {' '.join(cmd)}: {e.stderr}\nStdout: {e.stdout}"
    except Exception as e:
        return "", str(e)

output_path = "/home/honore/.gemini/antigravity/brain/8012f65c-d8cill-418b-947f-9748207415a6/scratch/pr_270_new_diff.txt"

# 1. Fetch updated pull request #270 head into a local branch pr-270-updated
out_fetch, err_fetch = run_cmd(["git", "fetch", "upstream", "pull/270/head:pr-270-updated"])

# 2. View the diff of the files changed in pr-270-updated relative to development
out_diff, err_diff = run_cmd(["git", "diff", "development", "pr-270-updated"])

with open(output_path, "w") as f:
    f.write("=== Git Fetch PR-270 Updated ===\n")
    f.write(f"Stdout:\n{out_fetch}\n")
    f.write(f"Stderr:\n{err_fetch}\n")
    f.write("\n=== Git Diff development...pr-270-updated ===\n")
    f.write(out_diff)

print("Updated PR 270 check complete.")
