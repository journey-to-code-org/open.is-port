import test from "node:test";import assert from "node:assert/strict";import{isPort}from"../src/index.js";
test("valid",()=>{assert.equal(isPort(443),true);assert.equal(isPort("3000"),true);});
test("invalid",()=>{assert.equal(isPort(0),false);assert.equal(isPort(65536),false);});
test("zero option",()=>assert.equal(isPort(0,{allowZero:true}),true));
