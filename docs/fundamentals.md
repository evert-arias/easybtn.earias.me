---
id: fundamentals
title: Fundamentals
sidebar_label: Fundamentals
---

## Including the Library

Once the library has been installed, you may include it as shown below.

```cpp
#include <EasyButton.h>
```

## EasyButton Class

The library exposes the **EasyButton** class. Create an instance of the class for every button that you have connected.

```cpp
#define PWR_BTN_PIN 26
#define RST_BTN_PIN 27
EasyButton powerButton(PWR_BTN_PIN);
EasyButton resetButton(RST_BTN_PIN);
```

### Arguments

The following arguments can be passed to the class constructor.

```cpp
#define PWR_BTN_PIN 26
uint8 debounce = 40;
bool pullup = false;
bool invert = false;

EasyButton powerButton(PWR_BTN_PIN, debounce, pullup, invert);
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

## Initializing a button

Initialize the button by calling the method `begin` within the `setup` function.

```cpp
void setup() {
    powerButton.begin();
}
```

## Update Button State

Continuously read the state of the button.

```cpp
void loop() {
    powerButton.read();
}
```

:::note Note

There is no need to keep a track of button state when using external interrupts. Please refer to [using external interrupts]().

:::

## Callbacks

EasyButton allows you to attach callback functions to certain button events. Use callback functions to run specific code when the event gets triggered. Attach callback functions within the setup function.

```cpp
void onPressed() {
  Serial.println("Power button has been pressed!");
}

void onReleased() {
    Serial.println("Power button has been released!");
}

void setup() {
    // onPressed function will be called when the onPressed event of the button gets triggered.
    powerButton.onPressed(onPressed);
    // onReleased function will be called when the onReleased event of the button gets triggered.
    powerButton.onReleased(onReleased);
}
```
