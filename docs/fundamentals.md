---
id: fundamentals
title: Fundamentals
sidebar_label: Fundamentals
---



## Including the Library

Include the library as shown below.

```cpp
#include <EasyButton.h>
```



## EasyButton Class

The library exposes a class that you must use to create an instance for every button that you want to hook to EasyButton. 

```cpp
#define BUTTON_PIN 26
EasyButton button1(BUTTON_PIN);
```



## Callbacks

Add a callback function that will be called when the button is pressed.

```cpp
void onPressed() {
  Serial.println("Button has been pressed!");
}
```

```

```

