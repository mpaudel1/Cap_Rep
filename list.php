<html>
<head>
<title>Simple Math With User Input</title>
</head>
<body>
<?php
$initial_balance = $_POST['budget'];
$p1_cost = $_POST['p1_cost'];
$p2_cost = $_POST['p2_cost'];
$p3_cost = $_POST['p3_cost'];
$p1_dif = $initial_balance - $p1_cost;
$p2_dif = $p1_dif - $p2_cost;
echo "Your current remaining budget is ". $dif;
echo "The difference of the two numbers is ". $b;
?>
</body>
</html>