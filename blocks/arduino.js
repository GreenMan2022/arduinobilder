// =============== БЛОКИ ===============

Blockly.Blocks['arduino_setup'] = {
  init: function() {
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setColour(210);
    this.setTooltip("Код внутри setup()");
    this.setHelpUrl("");
    this.setDeletable(false);
    this.setMovable(false);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
  }
};

Blockly.Blocks['arduino_loop'] = {
  init: function() {
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setColour(180);
    this.setTooltip("Код внутри loop()");
    this.setHelpUrl("");
    this.setDeletable(false);
    this.setMovable(false);
    this.setPreviousStatement(false);
    this.setNextStatement(false);
  }
};

Blockly.Blocks['arduino_pin_digital_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Цифровой вывод пин")
        .appendField(new Blockly.FieldDropdown([["13","13"],["12","12"],["11","11"],["10","10"],["9","9"],["8","8"]]), "PIN")
        .appendField("в")
        .appendField(new Blockly.FieldDropdown([["ВЫСОКИЙ","HIGH"],["НИЗКИЙ","LOW"]]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("digitalWrite(pin, HIGH/LOW)");
  }
};

Blockly.Blocks['arduino_delay'] = {
  init: function() {
    this.appendValueInput("DELAY")
        .setCheck("Number")
        .appendField("Задержка (мс)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
    this.setTooltip("delay(мс)");
  }
};

// =============== ГЕНЕРАТОР ===============

Blockly.Arduino = new Blockly.Generator('Arduino');

Blockly.Arduino['arduino_setup'] = function(block) {
  const branch = Blockly.Arduino.statementToCode(block, 'DO');
  return branch;
};

Blockly.Arduino['arduino_loop'] = function(block) {
  const branch = Blockly.Arduino.statementToCode(block, 'DO');
  return branch;
};

Blockly.Arduino['arduino_pin_digital_write'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  return `  digitalWrite(${pin}, ${state});\n`;
};

Blockly.Arduino['arduino_delay'] = function(block) {
  const delayTime = Blockly.Arduino.valueToCode(block, 'DELAY', Blockly.Arduino.ORDER_ATOMIC) || '1000';
  return `  delay(${delayTime});\n`;
};
