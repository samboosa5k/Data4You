<?php

//  Requires
require_once('./DB/DB.php');
require_once('./DB/DB_functions.php');
require_once('./class/Country.class.php');
require_once('./class/Region.class.php');

$success = connect('localhost', 'world', 'root', '');

//  Queries

/* 
*
*   $array_of_results = select($query, $values, $class);
*   $single_result = select_one($query, $values, $class); 
*
*/

$query1 = "SELECT * FROM `region`";

$results = (select($query1, [], ''));

$query2 = "INSERT INTO `region` (`name`, `slug`) VALUES (?,?)";

/* 

update($query2, ['North America', 'north-america']);
update($query2, ['South America', 'south-america']); 

*/

/* 

$results2 = (select($query2)); 

$populations = array_map(function ($country) {
    return $country->getFormattedPopulation();
}, $results); 

*/

$newRegion = new Region('Central Africa', 'asdf');
$newRegion->insert();

/* 
*
*   I messed up the built0
*
*/
$query = "SELECT * FROM `world` WHERE `Name`=?";
$central_africa = select_one($query, ['Central Africa'], 'Region');
$central_africa->setName('Central Africa');
$central_africa->setSlug('central-africa');
$central_africa->update();

var_dump($results);
