<?php
/**
 * Per-site configuration. Copy to config.php and fill in.
 */

return array(

    'secret' => 'CHANGE-ME-to-64-random-hex-chars',

    'allowedOrigins' => array(
        'www.kolmokafe.cz',
        'kolmokafe.cz',
        'localhost',
    ),

    'turnstileSecretKey' => 'CHANGE-ME-turnstile-secret',

    'dataDir' => __DIR__ . '/data',
    'retentionDays' => 365,
    'nonceTtl' => 7200,
    'store' => true,

    'mail' => array(
        'enabled' => true,
        'transport' => 'auto',
        'from'     => 'info@kolmokafe.cz',
        'fromName' => 'Kolmo Kafe web',
        'smtp' => array(
            'host'     => 'smtp.example.com',
            'port'     => 587,
            'security' => 'tls',
            'user'     => 'info@kolmokafe.cz',
            'pass'     => 'CHANGE-ME',
            'timeout'  => 15,
        ),
    ),

    'exportToken' => '',
    'debug' => false,
);
