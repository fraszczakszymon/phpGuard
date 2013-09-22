<?php

namespace Acme;

require_once('SomeOtherClass.php');

/**
 * @covers Acme\SomeOtherClass
 */
class SomeOtherClassTest extends \PHPUnit_Framework_TestCase
{
  /**
   * Some simple test for sayHello method
   *
   * @test
   */
  public function sayHello_called_shouldReturnString()
  {
    $someObject = new SomeOtherClass();
    $this->assertSame("Hello everyone!", $someObject->sayHello());
  }
}