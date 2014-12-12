<?php

$type = filter_var($_POST['command'], FILTER_SANITIZE_STRING);
$username = ucfirst(filter_var($_POST['user_name'], FILTER_SANITIZE_STRING));
  if ($type == '/wop') {
  	if ($username != 'wopian') {
  		$payload = "$username attempted to do the wop.";
  	} else {
    	$payload = "$username did the wop.";
	}
	$curl = curl_init();
	curl_setopt_array($curl, array(
	  CURLOPT_URL => 'https://hooks.slack.com/services/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',
	  CURLOPT_RETURNTRANSFER => 1,
	  CURLOPT_POST => 1,
	  CURLOPT_POSTFIELDS => array('payload' => '{"text": "'.$payload.'"}')
	));
	curl_exec($curl);
	curl_close($curl);
  }
?>
