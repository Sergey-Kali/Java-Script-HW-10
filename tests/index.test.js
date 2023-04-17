describe("Test for sumOfArrayElements function", function () {
  let arr;

  beforeEach(function () {
    arr = [];
  });

  it("should return the correct sum of array elements", function () {
    arr = [1, 2, 3, 4, 5];
    let expectedOutput = "Сума елементів масиву: 15";
    spyOn(console, "log");
    sumOfArrayElements(arr);
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });

  it("should ignore non-numeric values in the array", function () {
    arr = [1, "two", 3, "four", 5];
    let expectedOutput = "Сума елементів масиву: 9";
    spyOn(console, "log");
    sumOfArrayElements(arr);
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });

  it("should handle empty array correctly", function () {
    let expectedOutput = "Сума елементів масиву: 0";
    spyOn(console, "log");
    sumOfArrayElements(arr);
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });
});
//---------------------------------------------------------------------------
describe("Test for maxAndMinValueArr function", function () {
  let arr;

  beforeEach(function () {
    arr = [];
  });

  it("should correctly determine the minimum and maximum values in the array", function () {
    arr = [1, 2, 3, 4, 5];
    let expectedOutput =
      "Мінімальне значення масиву: 1\nМаксимальне значення масиву: 5";
    spyOn(console, "log");
    maxAndMinValueArr(arr);
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });

  it("should ignore non-numeric values in the array", function () {
    arr = [1, "two", 3, "four", 5];
    let expectedOutput =
      "Мінімальне значення масиву: 1\nМаксимальне значення масиву: 5";
    spyOn(console, "log");
    maxAndMinValueArr(arr);
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });

  it("should handle empty array correctly", function () {
    let expectedOutput =
      "Мінімальне значення масиву: undefined\nМаксимальне значення масиву: undefined";
    spyOn(console, "log");
    maxAndMinValueArr(arr);
    expect(console.log).toHaveBeenCalledWith(expectedOutput);
  });
});
//---------------------------------------------------------------------------
describe("Test for tree function", function () {
  let symbol;

  beforeEach(function () {
    symbol = "";
  });

  it("should display an error message if symbol is not a string or is empty", function () {
    symbol = null;
    spyOn(console, "error");
    tree(symbol);
    expect(console.error).toHaveBeenCalledWith(
      "Error: The function accepts only string data type"
    );
  });
});
//---------------------------------------------------------------------------
describe("Test for Acumullator", function () {
  let acumullator;

  beforeEach(function () {
    acumullator = new Acumullator(0);
    spyOn(console, "log");
  });

  it("should create an Acumullator object with the initial value", function () {
    expect(acumullator.value).toBe(0);
  });

  it("should increment the value of Acumullator by 1", function () {
    acumullator.increment();
    expect(acumullator.value).toBe(1);
    expect(console.log).toHaveBeenCalledWith("Acumullator +1 =", 1);
  });

  it("should decrement the value of Acumullator by 1", function () {
    acumullator.decrement();
    expect(acumullator.value).toBe(-1);
    expect(console.log).toHaveBeenCalledWith("Acumullator -1 =", -1);
  });
});
//---------------------------------------------------------------------------
describe("Test for CancelableAccumulator", function () {
  let cancelableAccumulator;

  beforeEach(function () {
    cancelableAccumulator = new CancelableAccumulator(0);
    spyOn(console, "log");
  });

  it("should clear the value of CancelableAccumulator to the original value", function () {
    cancelableAccumulator.increment();
    cancelableAccumulator.increment();
    cancelableAccumulator.clear();
    expect(cancelableAccumulator.value).toBe(0);
    expect(console.log).toHaveBeenCalledWith("The base value:", 0);
  });
});
//---------------------------------------------------------------------------
describe("Test for pressTheKeyToNavigate", function () {
  let navSpan1, navSpan2, navSpan3;
  let event;

  beforeEach(function () {
    // Створення тестових HTML-елементів .nav-span
    navSpan1 = document.createElement("div");
    navSpan1.classList.add("nav-span");
    navSpan1.textContent = "1";
    document.body.appendChild(navSpan1);

    navSpan2 = document.createElement("div");
    navSpan2.classList.add("nav-span");
    navSpan2.textContent = "2";
    document.body.appendChild(navSpan2);

    navSpan3 = document.createElement("div");
    navSpan3.classList.add("nav-span");
    navSpan3.textContent = "3";
    document.body.appendChild(navSpan3);

    event = new Event("keydown"); // Створення події keydown
  });

  afterEach(function () {
    // Видалення тестових HTML-елементів після кожного тесту
    navSpan1.remove();
    navSpan2.remove();
    navSpan3.remove();
  });

  it("should scroll to the corresponding nav-span element when the matching key is pressed", function () {
    event.code = "Digit1"; // Симуляція натискання клавіші "1"
    spyOn(navSpan1, "scrollIntoView"); // Перехоплення методу scrollIntoView

    document.dispatchEvent(event); // Виклик події keydown

    expect(navSpan1.scrollIntoView).toHaveBeenCalledWith({
      block: "start",
      behavior: "smooth",
    });
    expect(navSpan2.scrollIntoView).not.toHaveBeenCalled();
    expect(navSpan3.scrollIntoView).not.toHaveBeenCalled();
  });

  it("should not scroll to any nav-span element when a non-matching key is pressed", function () {
    event.code = "KeyA"; // Симуляція натискання клавіші "A"
    spyOn(navSpan1, "scrollIntoView"); // Перехоплення методу scrollIntoView

    document.dispatchEvent(event); // Виклик події keydown

    expect(navSpan1.scrollIntoView).not.toHaveBeenCalled();
    expect(navSpan2.scrollIntoView).not.toHaveBeenCalled();
    expect(navSpan3.scrollIntoView).not.toHaveBeenCalled();
  });
});
//---------------------------------------------------------------------------
describe("Test for scaleMainImage", function () {
  let mainImage;

  beforeEach(function () {
    // Створення тестового HTML-елемента .main-image
    mainImage = document.createElement("div");
    mainImage.classList.add("main-image");
    document.body.appendChild(mainImage);

    spyOn(mainImage.classList, "toggle").and.callThrough(); // Перехоплення методу toggle
  });

  it("should add 'main-image__scale' class to mainImage element on click", function () {
    mainImage.click(); // Симуляція кліку на елемент

    expect(mainImage.classList.toggle).toHaveBeenCalledWith(
      "main-image__scale"
    );
    expect(mainImage.classList.contains("main-image__scale")).toBe(true);
  });

  it("should remove 'main-image__scale' class from mainImage element on second click", function () {
    mainImage.click(); // Симуляція першого кліку на елемент
    mainImage.click(); // Симуляція другого кліку на елемент

    expect(mainImage.classList.toggle).toHaveBeenCalledWith(
      "main-image__scale"
    );
    expect(mainImage.classList.contains("main-image__scale")).toBe(false);
  });

  afterEach(function () {
    mainImage.remove(); // Видалення тестового HTML-елемента після кожного тесту
  });
});
