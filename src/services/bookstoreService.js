export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Production-Ready Microservices",
        author: "Susan J.",
        price: 20,
        coverImage:
          "https://images.unsplash.com/photo-1575181963610-33e87fc05a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 2,
        title: "Release It!",
        author: "Michael T.",
        price: 32,
        coverImage:
          "https://images.unsplash.com/photo-1575141251061-c8259641ed63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: 3,
        title: "Java Script ES6",
        author: "Andi Suldain",
        price: 41,
        coverImage:
          "https://images.unsplash.com/photo-1575148241070-f7c73e95f529?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      }
    ];
  }
}
