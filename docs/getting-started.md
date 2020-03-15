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

Use the exposed class `EasyButton` to create an instance for every button that you want to create.

```cpp
#define BUTTON_PIN 26
EasyButton button(BUTTON_PIN);
```



## Initializing a button

Initialize the button by calling the method `begin`  within the setup function.

```cpp
void setup() {
    button.begin();
}
```



## Callback functions

EasyButton allows you to attach callback functions to certain button events. Use callback functions to run specific code when the event gets triggered.

```cpp
void onPressed() {
    Serial.println("Button has been pressed!");
}
```

```cpp
void onReleased() {
    Serial.println("Button has been released!");
}
```

Add button's callback functions within the setup function.

```cpp
void setup() {
    // onPressed function will be called when the onPressed event of the button gets triggered.
    button.onPressed(onPressed);
    // onReleased function will be called when the onReleased event of the button gets triggered.
    button.onReleased(onReleased);
}
```
