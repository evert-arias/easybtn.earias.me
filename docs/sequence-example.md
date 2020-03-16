---
id: sequence-example
title: Detecting Sequence
sidebar_label: Detecting Sequence
---

The following example demonstrate how to detect a sequence of presses.

Download [source code](https://github.com/evert-arias/EasyButton/blob/master/examples)

```cpp
#include <EasyButton.h>

// Arduino pin number where the button is connected.
#define BUTTON_PIN 26

// Number of presses.
int presses = 5;
// Timeout.
int timeout = 2000;

// Duration.
int duration = 2000;

// Button.
EasyButton button(BUTTON_PIN);

// Callback.
void onSequenceMatched() {
  Serial.println("Sequence matched");
}

void setup() {
    Serial.begin(115200);

  	// Initialize the button.
  	button.begin();

  	// Attach callback.
  	button.onSequence(presses, timeout, onSequenceMatched);
}

void loop() {
    // Continuously update the button state.
  	button.read();
}
```

:::important Work on progress

We are currently working on this section.

:::