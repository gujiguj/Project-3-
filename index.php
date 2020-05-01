<!DOCTYPE html>
<html>
    <a href = "index.html"><button>Back</button></a>
    <h1 id = "name"></h1>
    <h3 id = "team"></h3>
    <h3 id = "position"></h3>
    <h3 id = "height"></h3>
    <h3 id = "weight"></h3>
    <script src ="player.js" ></script>

    
    <?php 
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            if (isset($_GET['id'])) {
            $id = $_GET['id'];
            }
            echo '<body onload = "displayPlayer(' . $id . ')">';
        }
    ?>
    </body>
</html>




