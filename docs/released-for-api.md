---
id: released-for-api
title: releasedFor
sidebar_label: releasedFor
---

## Description

Returns `true` if the button state was **released** at the last read, and has been in that state for at least the given number of milliseconds.

```cpp
int releasedForTime = 2000;

bool released_for = button.releasedFor(releasedForTime);
```
