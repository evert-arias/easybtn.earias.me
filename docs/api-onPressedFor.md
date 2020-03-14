---
id: api-onPressedFor
title: onPressedFor
sidebar_label: onPressedFor
---

Triggers a callback function when the Button has been pressed and hold for at least the given duration time. This method takes two parameters as arguments. The first argument is the duration in milliseconds and the second is the callback function to be called.

```c++
int duration = 2000;
button.onPressedFor(duration, onPressedCallback);
```