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

## Example

Please refer to the [Pressed For Duration](pressed-for-duration-example) example included in this documentation.
