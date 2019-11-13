<?php $site_url = 'http://localhost:7777/Data4You/practice/day32-laravel_react_serverSide';
?>
<div id="topmenu">
    <nav>
        <a href="<?= $site_url ?>">My HOME</a>
        <a href="<?= $site_url ?>/products.php">products</a>
        <a href="<?= $site_url ?>/contact.php">contact form</a>
    </nav>

    <?php include('./views/cart-bar.php'); ?>
</div>