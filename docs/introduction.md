---
id: introduction
title: Introduction
---

## What it is for

This library is for debouncing and reading momentary contact switches like tactile buttons. It uses callbacks to trigger actions when a Button is pressed once or held for a given duration. It also provides a sequence counter to be able to rise an event when a given pattern of presses has been matched.

:::note Important
If using **ESP32**, be aware that some of the pins does not have software pullup/down functions. Use an external pull-up resistor, 10K works well. Refer to [Pull-up Resistors](https://learn.sparkfun.com/tutorials/pull-up-resistors).
:::

