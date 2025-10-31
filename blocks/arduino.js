Blockly.Arduino = new Blockly.Generator('Arduino');

Blockly.Arduino.addReservedWords('setup,loop,Serial,Serial1,Serial2,Serial3');

Blockly.Arduino['arduino_pin_digital_write'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  return `digitalWrite(${pin}, ${state});\n`;
};

Blockly.Arduino['arduino_pin_digital_read'] = function(block) {
  const pin = block.getFieldValue('PIN');
  return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['arduino_delay'] = function(block) {
  const delayTime = block.getFieldValue('DELAY');
  return `delay(${delayTime});\n`;
};

// Аналогично добавляются analogWrite, analogRead и др.
