---
id: on-single-press-example
title: Single Press
sidebar_label: Single Press
---

The following example demostrate how to detect a single press.

Download [source code](https://github.com/evert-arias/EasyButton/blob/master/examples)

```cpp
#include <EasyButton.h>

// Arduino pin number where the button is connected.
#define BUTTON_PIN 26

// Button.
EasyButton button(BUTTON_PIN);

// Callback.
void onPressed() {
    Serial.println("Button has been pressed!");
}

void setup() {
    Serial.begin(115200);

  	// Initialize the button.
  	button.begin();

  	// Attach callback.
  	button.onPressed(onPressed);
}

void loop() {
    // Continuously update the button state.
  	button.read();
}
```

:::important Work on progress

We are currently working on this section.

:::
