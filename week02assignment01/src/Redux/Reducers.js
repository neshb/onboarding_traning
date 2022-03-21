import { ActionTypes } from "./ActionType"

const initialState = {
    products: [
        {
            id: 1,
            sellerId: 1,
            name: "product 1",
            cost: "200",
            quantity: "20",
            sellerName: "seller 01",
            email: "seller01@gmail.com",
            category: "Fashion",
        },
        {
            id: 2,
            name: "product 2",
            cost: "2000",
            quantity: "2",
            sellerName: "seller 01",
            email: "seller01@gmail.com",
            category: "Fashion",
        },
        {
            id: 3,
            sellerId: 1,
            name: "product 3",
            cost: "500",
            quantity: "200",
            sellerName: "seller 01",
            email: "seller01@gmail.com",
            category: "Fashion",
        },
        {
            id: 4,
            sellerId: 1,
            name: "product 4",
            cost: "20",
            quantity: "2000",
            sellerName: "seller 01",
            email: "seller01@gmail.com",
            category: "Fashion",
        },
        {
            id: 5,
            sellerId: 1,
            name: "product 5",
            cost: "250",
            quantity: "20",
            sellerName: "seller 01",
            email: "seller01@gmail.com",
            category: "Fashion",
        },
        {
            id: 6,
            sellerId: 2,
            name: "product 6",
            cost: "700",
            quantity: "20",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"

        },
        {
            id: 7,
            sellerId: 2,
            name: "product 7",
            cost: "1000",
            quantity: "30",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 8,
            sellerId: 2,
            name: "product 8",
            cost: "700",
            quantity: "50",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 9,
            sellerId: 2,
            name: "product 9",
            cost: "400",
            quantity: "80",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 10,
            sellerId: 2,
            name: "product 10",
            cost: "900",
            quantity: "20",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 11,
            sellerId: 2,
            name: "product 1",
            cost: "200",
            quantity: "20",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 12,
            sellerId: 2,
            name: "product 2",
            cost: "2000",
            quantity: "2",
            sellerName: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 13,
            sellerId: 3,
            name: "product 3",
            cost: "500",
            quantity: "200",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 14,
            sellerId: 3,
            name: "product 4",
            cost: "20",
            quantity: "2000",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 15,
            sellerId: 3,
            name: "product 5",
            cost: "250",
            quantity: "20",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 16,
            sellerId: 3,
            name: "product 6",
            cost: "700",
            quantity: "20",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 17,
            sellerId: 3,
            name: "product 7",
            cost: "1000",
            quantity: "30",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 18,
            sellerId: 3,
            name: "product 8",
            cost: "700",
            quantity: "50",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 19,
            sellerId: 3,
            name: "product 9",
            cost: "400",
            quantity: "80",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 20,
            sellerId: 3,
            name: "product 10",
            cost: "900",
            quantity: "20",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 21,
            sellerId: 3,
            name: "product 1",
            cost: "200",
            quantity: "20",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 22,
            sellerId: 3,
            name: "product 2",
            cost: "2000",
            quantity: "2",
            sellerName: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 23,
            sellerId: 3,
            name: "product 3",
            cost: "500",
            quantity: "200",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 24,
            sellerId: 4,
            name: "product 4",
            cost: "20",
            quantity: "2000",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 25,
            sellerId: 4,
            name: "product 5",
            cost: "250",
            quantity: "20",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 26,
            sellerId: 4,
            name: "product 6",
            cost: "700",
            quantity: "20",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 27,
            sellerId: 4,
            name: "product 7",
            cost: "1000",
            quantity: "30",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 28,
            sellerId: 4,
            name: "product 8",
            cost: "700",
            quantity: "50",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 29,
            sellerId: 4,
            name: "product 9",
            cost: "400",
            quantity: "80",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        },
        {
            id: 30,
            sellerId: 4,
            name: "product 10",
            cost: "900",
            quantity: "20",
            sellerName: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        }
    ],
    carts: [],
    sellers: [
        {
            id: 1,
            name: "seller 01",
            email: "seller01@gmail.com",
            category: "Fashion",
        },
        {
            id: 2,
            name: "seller 02",
            email: "seller02@gmail.com",
            category: "Electronics"
        },
        {
            id: 3,
            name: "seller 03",
            email: "seller03@gmail.com",
            category: "Hardware"
        },
        {
            id: 4,
            name: "seller 04",
            email: "seller04@gmail.com",
            category: "grocery"
        }
    ]
};


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.Add_TO_CART:
            let product
            const productPayload = payload
            const withoutProduct = state.carts.filter((obj) => {
                if (obj.name !== productPayload.name) {
                    return obj
                }
            })
            const withProduct = state.carts.filter((obj) => {
                if (obj.name === productPayload.name) {
                    return obj
                }
            })
            if (withProduct.length > 0) {
                product = {
                    ...withProduct[0],
                    quantity: parseInt(withProduct[0].quantity) + 1
                }
            } else {
                product = {
                    ...productPayload,
                    quantity: 1
                }
            }
            const carts = [...withoutProduct, product]
            return { ...state, carts }
        case ActionTypes.REMOVE_FROM_CART:
            const removeCarts = state.carts.filter((product) => {
                if (payload.id !== product.id ) {
                  return product
                }
              })
              return { ...state, carts: removeCarts }
        default:
            return state
    }
}