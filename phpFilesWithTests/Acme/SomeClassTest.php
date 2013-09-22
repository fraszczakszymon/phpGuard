<?php

namespace Acme;

require_once('SomeClass.php');

/**
 * @covers Acme\SomeClass
 */
class SomeClassTest extends \PHPUnit_Framework_TestCase
{
  /**
   * Some simple test for sayHello method
   *
   * @test
   */
  public function sayHello_called_shouldReturnString()
  {
    $someObject = new SomeClass();
    $this->assertSame("Hello everyone!", $someObject->sayHello());
  }
}