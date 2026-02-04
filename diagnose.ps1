Write-Host "========================================" -ForegroundColor Magenta
Write-Host "  FAVICON 404 DIAGNOSTIC SCRIPT" -ForegroundColor Magenta
Write-Host "========================================`n" -ForegroundColor Magenta

# 1. Next.js Version
Write-Host "=== NEXT.JS VERSION ===" -ForegroundColor Cyan
npm list next
Write-Host ""

# 2. Favicon Locations
Write-Host "=== FAVICON LOCATIONS ===" -ForegroundColor Cyan
$favicons = Get-ChildItem -Recurse -Include *.ico, icon.* -ErrorAction SilentlyContinue | 
    Where-Object { $_.FullName -notmatch 'node_modules' }
if ($favicons) {
    $favicons | ForEach-Object { Write-Host "📄 $($_.FullName)" -ForegroundColor Green }
} else {
    Write-Host "❌ No favicon files found!" -ForegroundColor Red
}
Write-Host ""

# 3. Directory Check
Write-Host "=== DIRECTORY CHECK ===" -ForegroundColor Cyan
@('app', 'src\app', 'public', 'pages') | ForEach-Object {
    if (Test-Path $_) {
        Write-Host "✅ $_ exists" -ForegroundColor Green
        Get-ChildItem $_ -File | Select-Object Name
    } else {
        Write-Host "❌ $_ not found" -ForegroundColor Red
    }
}
Write-Host ""

# 4. Layout File
Write-Host "=== LAYOUT FILE ===" -ForegroundColor Cyan
$layoutPaths = @("app\layout.tsx", "src\app\layout.tsx", "app\layout.js", "src\app\layout.js")
$foundLayout = $false
foreach ($path in $layoutPaths) {
    if (Test-Path $path) {
        Write-Host "✅ Found: $path" -ForegroundColor Green
        Get-Content $path
        $foundLayout = $true
        break
    }
}
if (-not $foundLayout) {
    Write-Host "❌ No layout file found!" -ForegroundColor Red
}
Write-Host ""

# 5. Vercel Config
Write-Host "=== VERCEL CONFIG ===" -ForegroundColor Cyan
if (Test-Path "vercel.json") {
    Get-Content "vercel.json"
} else {
    Write-Host "⚠️  No vercel.json found" -ForegroundColor Yellow
}

Write-Host "`n========================================" -ForegroundColor Magenta
Write-Host "  DIAGNOSTIC COMPLETE - Send results!" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
