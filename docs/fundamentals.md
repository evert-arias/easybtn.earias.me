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

### Arguments

The following arguments can be passed to the class constructor.

```cpp
#define BUTTON_PIN 26
uint8 debounceTime = 40;
bool pullUp = false;
bool invert = false;

EasyButton button1(BUTTON_PIN, debounceTime, pullUp, invert);
```

|   Argument    | Data Type | Required? | Default Value |                                                                         Description                                                                         |
| :-----------: | :-------: | :-------: | :-----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      pin      |  uint8_t  |    yes    |      n/a      |                                                      Arduino pin number where the button is connected.                                                      |
| debounce_time | uint32_t  |    no     |      35       |         Period of time to make sure the pushbutton is definitely pressed. Please refer to [debounce](https://www.arduino.cc/en/tutorial/debounce).          |
| pullup_enable |   bool    |    no     |     true      | Enable internal pullup resistor. Please refer to [digital pins](https://www.arduino.cc/en/Tutorial/DigitalPins). If using ESP32, please see the note below. |
|    invert     |   bool    |    no     |     true      |            Invert button logic. If true, low = pressed else high = pressed. Please refer to [invert](https://www.arduino.cc/en/Tutorial/Invert).            |

:::note Note
If using **ESP32**, be aware that some of the pins does not have software **pull-up**/**pull-down** functionalities. In that case, use an external pull-up resistor, 10K works well. Please refer to [Pull-up Resistors](https://learn.sparkfun.com/tutorials/pull-up-resistors).
:::

## Callbacks

EasyButton allows you to attach callback functions to certain button events. Use callback functions to run specific code when the event gets triggered. Attach callback functions within the setup function.

```cpp
void onPressed() {
  Serial.println("Button has been pressed!");
}

void onReleased() {
    Serial.println("Button has been released!");
}

void setup() {
    // onPressed function will be called when the onPressed event of the button gets triggered.
    button.onPressed(onPressed);
    // onReleased function will be called when the onReleased event of the button gets triggered.
    button.onReleased(onReleased);
}
```
