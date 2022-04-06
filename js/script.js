// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area of a triangle.
 */
function calculate () {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)
  // process
  const celsius = (fahrenheit - 32) * 5.0 / 9.0
  // output
  document.getElementById("celsius").innerHTML =
    "The temperature in Celsius is: " + celsius + ' °C' 
}
