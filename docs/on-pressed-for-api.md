---
id: on-pressed-for-api
title: onPressedFor
sidebar_label: onPressedFor
---

`Event`

## Description

Triggers a callback function when the Button has been pressed and hold for at least the given duration time. This method takes two parameters as arguments. The first argument is the duration in milliseconds and the second is the callback function to be called.

```cpp
int duration = 2000;

button.onPressedFor(duration, onPressedCallback);
```
## External interrupts

When the button is being interfaced with microcontroller through external interrupts and you need to use this feature, method `update` must be called inside `loop` function as shown below.

```cpp
void loop() {
  // update() function must be called repeatedly only if onPressedFor functionality is being used and interrupt is enabled
  button.update();
}
```

## Examples

Please refer to the [Pressed For Duration](on-pressed-for-duration-example) example included in this documentation.
