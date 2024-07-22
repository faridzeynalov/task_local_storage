function getItemFromStorage(key: string): any {
  if (!localStorage.getItem(key)) {
    throw new Error("There is no item with this key in local storage");
  }

  let item = localStorage.getItem(key);

  if (item !== null) {
    if (item.startsWith("{") && item.endsWith("}")) {
      console.log("It is a object:", item);
    } else if (item.startsWith("[") && item.endsWith("]")) {
      console.log("It is an array:", item);
    } else if (!isNaN(Number(item))) {
      console.log("It is a number:", item);
    } else if (Boolean(item)) {
      console.log("It is a boolean:", item);
    } else {
      console.log("It is a string:", item);
    }
  } else {
    console.log("it is null:", key);
  }
}

function setItem(key: string, value: any): void {
  if (localStorage.getItem(key)) {
    throw new Error("There is an item in local storage with this key");
  }
  if (typeof value != "string") {
    localStorage.setItem(key, JSON.stringify(value));
  }
  localStorage.setItem(key, value);
}

function removeItem(key: string) {
  if (!localStorage.getItem(key)) {
    throw new Error("There is no item with this key in local storage");
  }
  localStorage.removeItem(key);
}

function clearLocalStorage(): void {
  localStorage.clear();
}

console.log(getItemFromStorage("age"));

console.log(localStorage.getItem("age"));