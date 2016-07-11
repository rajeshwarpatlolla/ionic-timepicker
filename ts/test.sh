#!/usr/bin/env bash
echo "test es6"
tsc --target es6 ionic-timepicker.d.ts
echo "test no implicit any"
tsc --noImplicitAny ionic-timepicker.d.ts
echo "if no error message, all passed"
