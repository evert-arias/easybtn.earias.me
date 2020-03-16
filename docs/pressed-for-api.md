---
id: pressed-for-api
title: pressedFor
sidebar_label: pressedFor
---

## Description

Returns `true` if the button state was **pressed** at the last read, and has been in that state for at least the given number of milliseconds.

```cpp
int pressedForTime = 2000;

bool pressed_for = button.pressedFor(pressedForTime);
```
