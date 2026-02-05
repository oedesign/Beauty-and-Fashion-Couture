<?php
// ==========================
// CONFIGURATION
// ==========================
$SECRET_TOKEN = "BFC-PRIVATE-2026-ACCESS"; // Change this to a long random string

// ==========================
// TOKEN CHECK
// ==========================
if (!isset($_GET['token']) || $_GET['token'] !== $SECRET_TOKEN) {
    http_response_code(403);
    exit("<h2>403 Forbidden – Access Denied</h2>");
}

// ==========================
// MEDIA FILES
// ==========================
// Place your media inside /private/media/ folder
$images = ["image1.jpg", "image2.png", "image3.jpg"];
$videos = ["video1.mp4", "video2.mp4"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Private Media Gallery | Beauty & Fashion Couture</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
            color: #1F0D26;
        }
        h1 {
            text-align: center;
            color: #2E1435;
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .gallery img,
        .gallery video {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        video {
            display: block;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 14px;
            color: #555;
        }
        a.logout {
            display: inline-block;
            margin-top: 10px;
            color: #0DCCCA;
            text-decoration: none;
            font-weight: bold;
        }
        a.logout:hover { text-decoration: underline; }
    </style>
</head>
<body>

    <h1>🎬 Private Media Gallery</h1>
    <p style="text-align:center;">Accessible only via the secure link.</p>

    <div class="gallery">
        <!-- IMAGES -->
        <?php foreach ($images as $img): ?>
            <img src="media/<?php echo htmlspecialchars($img); ?>" alt="Private Image" loading="lazy">
        <?php endforeach; ?>

        <!-- VIDEOS -->
        <?php foreach ($videos as $vid): ?>
            <video controls preload="metadata">
                <source src="media/<?php echo htmlspecialchars($vid); ?>" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <?php endforeach; ?>
    </div>

    <div class="footer">
        &copy; <?php echo date("Y"); ?> Beauty & Fashion Couture <br>
        <a class="logout" href="/private/?token=INVALID">Logout</a>
    </div>

</body>
</html>
