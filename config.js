"use strict";
exports.DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost/fruits-db";
  exports.PORT = process.env.PORT || 8080;