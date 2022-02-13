// apps/cashconverters/src/app/libs/index.ts
function funcExportFromLib() {
  console.log("Function Invoked!");
}

// apps/cashconverters/src/app/index.ts
function main() {
  funcExportFromLib();
}

// apps/cashconverters/src/environments/environment.ts
var environment = {
  production: false,
  port: 4599
};

// apps/cashconverters/src/main.ts
console.log("environment: ", environment);
main();
