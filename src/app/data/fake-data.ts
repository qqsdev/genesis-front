import { Injectable } from '@angular/core';

export const FAKE_CATEGORIES = [
  {
    id: 1,
    name: 'Food',
    url: 'assets/images/food.jpg',
  },
  {
    id: 2,
    name: 'Milk products',
    url: 'assets/images/milk.jpg',
  },
  {
    id: 3,
    name: 'Flowers',
    url: 'assets/images/flowers.jpg',
  },
  {
    id: 4,
    name: 'Books',
    url: 'assets/images/books.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    url: 'assets/images/electronics.jpeg',
  },
  {
    id: 6,
    name: 'Toys',
    url: 'assets/images/Toys.jpg',
  },
  {
    id: 7,
    name: 'Toys',
    url: 'assets/images/Toys.jpg',
  },
  {
    id: 8,
    name: 'Toys',
    url: 'assets/images/Toys.jpg',
  },
  {
    id: 9,
    name: 'Toys',
    url: 'assets/images/Toys.jpg',
  },
];

export const FAKE_PRODUCTS = [
  {
    id: 1,
    categoryId: 5,
    name: 'SAMSUNG Galaxy S22',
    url: 'assets/images/electronics.jpeg',
  },
  {
    id: 2,
    categoryId: 5,
    name: 'SAMSUNG Galaxy S21 5G',
    url: 'assets/images/electronics.jpeg',
  },
  {
    id: 3,
    categoryId: 5,
    name: 'SAMSUNG Galaxy A13 5G',
    url: 'assets/images/electronics.jpeg',
  },
  {
    id: 4,
    categoryId: 5,
    name: 'OnePlus 10 Pro',
    url: 'assets/images/electronics.jpeg',
  },
  {
    id: 5,
    categoryId: 5,
    name: 'OnePlus Nord N200',
    url: 'assets/images/electronics.jpeg',
  },
  {
    id: 6,
    categoryId: 5,
    name: 'Poco f3',
    url: 'assets/images/electronics.jpeg',
  },
];

/**
 * Vaqtinchalik ma'lumotlar bilan ishlash uchun service.
 * Keyin buni o'rniga backend ulanadi.
 * Bu service ma'lumotlarni vaqtinchalik browseringizni o'zida saqlaydi.
 */
@Injectable({ providedIn: 'root' })
export class FakeDataService {
  /**
   * LocalStorage ichiga saqlab qo'yilgan ma'lumotlarni beradi
   * @param key saqlangan ma'lumot nomi
   * @param defaultItems agar saqlangan ma'lumot bo'lmasa, shu ma'lumotlarni saqlab, shuni o'zini qaytarib beradi
   * @returns vaqtinchali saqlangan ma'lumotlarni qaytaradi
   */
  public getList(key: string, defaultItems: any[] = []): any[] {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(defaultItems));
    }

    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  /**
   * LocalStorage ichiga ma'lumotlarni saqlab qo'yish
   * @param key ma'lumot nomi
   * @param items saqlab qo'yish kerak bo'lgan ma'lumot
   */
  public saveList(key: string, items: any[]) {
    localStorage.setItem(key, JSON.stringify(items));
  }
}
