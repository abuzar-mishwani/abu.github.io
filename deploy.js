import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Configuration
const REPO_URL = "https://github.com/abuzar-mishwani/abu.github.io.git";
const DIST_FOLDER = "./dist";
const TEMP_FOLDER = "./.deploy_temp";

try {
  console.log("🚀 Starting deployment process...");

  // Check if dist folder exists
  if (!fs.existsSync(DIST_FOLDER)) {
    console.error(
      '❌ dist folder not found. Please run "npm run build" first.'
    );
    process.exit(1);
  }

  // Clean up temp folder if it exists
  if (fs.existsSync(TEMP_FOLDER)) {
    console.log("🧹 Cleaning up temporary folder...");
    execSync(`rmdir /s /q "${TEMP_FOLDER}"`, { stdio: "inherit" });
  }

  // Clone the repository
  console.log("📂 Cloning repository...");
  execSync(`git clone "${REPO_URL}" "${TEMP_FOLDER}"`, { stdio: "inherit" });

  // Switch to main branch (or create it)
  console.log("🌿 Switching to main branch...");
  execSync("git checkout -B main", { cwd: TEMP_FOLDER, stdio: "inherit" });

  // Copy dist files to temp folder
  console.log("📋 Copying build files...");

  // Copy all files from dist to temp folder (excluding .git)
  const distFiles = fs.readdirSync(DIST_FOLDER);

  distFiles.forEach((file) => {
    const srcPath = path.join(DIST_FOLDER, file);
    const destPath = path.join(TEMP_FOLDER, file);

    if (fs.statSync(srcPath).isDirectory()) {
      // Copy directory recursively
      execSync(`xcopy /e /i /h /y "${srcPath}" "${destPath}"`, {
        stdio: "inherit",
      });
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });

  // Copy CNAME file if it exists
  if (fs.existsSync("./CNAME")) {
    fs.copyFileSync("./CNAME", path.join(TEMP_FOLDER, "CNAME"));
    console.log("📄 CNAME file copied");
  }

  // Copy other important files
  if (fs.existsSync("./robots.txt")) {
    fs.copyFileSync("./robots.txt", path.join(TEMP_FOLDER, "robots.txt"));
  }

  if (fs.existsSync("./sitemap.xml")) {
    fs.copyFileSync("./sitemap.xml", path.join(TEMP_FOLDER, "sitemap.xml"));
  }

  if (fs.existsSync("./manifest.webmanifest")) {
    fs.copyFileSync(
      "./manifest.webmanifest",
      path.join(TEMP_FOLDER, "manifest.webmanifest")
    );
  }

  if (fs.existsSync("./public/_headers")) {
    fs.copyFileSync("./public/_headers", path.join(TEMP_FOLDER, "_headers"));
    console.log("📄 _headers file copied");
  }

  // Add, commit and push
  console.log("📤 Committing and pushing changes...");

  process.chdir(TEMP_FOLDER);

  execSync("git add .", { stdio: "inherit" });

  const commitMessage = `Deploy portfolio - ${new Date().toISOString()}`;
  execSync(`git commit --allow-empty -m "${commitMessage}"`, { stdio: "inherit" });

  execSync("git push origin main --force", { stdio: "inherit" });

  // Clean up
  process.chdir("..");
  execSync(`rmdir /s /q "${TEMP_FOLDER}"`, { stdio: "inherit" });

  console.log("✅ Deployment completed successfully!");
  console.log(
    "🌐 Your site should be available at: https://mishwani.is-a.dev/"
  );
} catch (error) {
  console.error("❌ Deployment failed:", error.message);

  // Clean up on error
  if (fs.existsSync(TEMP_FOLDER)) {
    try {
      execSync(`rmdir /s /q "${TEMP_FOLDER}"`, { stdio: "inherit" });
    } catch (cleanupError) {
      console.warn("⚠️  Could not clean up temp folder:", cleanupError.message);
    }
  }

  process.exit(1);
}
