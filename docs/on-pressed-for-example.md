---
id: on-pressed-for-duration-example
title: Pressed For Duration
sidebar_label: Pressed For Duration
---

The following example demostrate how to detect when a button has been pressed for a given time.

Download [source code](https://github.com/evert-arias/EasyButton/blob/master/examples)

```cpp
#include <EasyButton.h>

// Arduino pin number where the button is connected.
#define BUTTON_PIN 26

// Duration.
int duration = 2000;

// Button.
EasyButton button(BUTTON_PIN);

// Callback.
void onPressedForDuration() {
    Serial.println("Button has been pressed for the given duration!");
}

void setup() {
    Serial.begin(115200);

  	// Initialize the button.
  	button.begin();

  	// Attach callback.
  	button.onPressedFor(duration, onPressedForDuration);
}

void loop() {
    // Continuously update the button state.
  	button.read();
}
```

:::important Work on progress

We are currently working on this section.

:::
