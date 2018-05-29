interface wingObj {
  id:string;
  value:string;
}

interface floorObj {
  id:string;
  value:string;
}

interface roomObj {
  id:string;
  value:string;
}

export const WINGS:wingObj[] = [
    { id: "a", value: "A" },
    { id: "b", value: "B" },
    { id: "c", value: "C" },
    { id: "d", value: "D" },
    { id: "e", value: "E" }
  ];

  export const FLOORS:floorObj[] = [
    { id: "0", value: "Ground" },
    { id: "1", value: "First" },
    { id: "2", value: "Second" },
    { id: "3", value: "Third" },
    { id: "4", value: "Fourth" },
    { id: "5", value: "Fifth" }
  ];

  export const ROOMS:roomObj[] = [
    { id: "1", value: "1" },
    { id: "2", value: "2" },
    { id: "3", value: "3" },
    { id: "4", value: "4" },
    { id: "5", value: "5" }
  ]