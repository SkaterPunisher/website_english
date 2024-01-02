import { Courses } from '@/sanity/schemas/courses-schema/coursesTypes'
import { CostType } from '@/types/CostType'
import { create } from 'zustand'
import { StorageValue, persist } from 'zustand/middleware'

type Item = {
  type: {
    period: string
    price: CostType
  }
  course: Courses
}

interface CartState {
  items: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: string) => void
  clear: () => void
}

// Use the persist middleware with the correct type signature
const useCartStore = create(
  persist<CartState>(
    set => ({
      items: [],
      addItem: item =>
        set(state => {
          // Find index of existing item with the same course._id
          const itemIndex = state.items.findIndex(
            existingItem => existingItem.course._id === item.course._id,
          )

          // If the item already exists, replace it. Otherwise, add the new item.
          const newItems =
            itemIndex >= 0
              ? state.items.map((existingItem, index) =>
                  index === itemIndex ? item : existingItem,
                )
              : [...state.items, item]

          return { items: newItems }
        }),
      removeItem: itemId =>
        set(state => ({
          // Remove course by id
          items: state.items.filter(item => item.course._id !== itemId),
        })),
      clear: () => set({ items: [] }),
    }),
    {
      name: 'cart', // localStorage key
      storage: {
        getItem: async name => {
          const item = localStorage.getItem(name)
          // Deserialize the string into the correct type
          return item ? (JSON.parse(item) as StorageValue<CartState>) : null
        },
        setItem: async (name, value) => {
          // Serialize the state to a string and store it
          localStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: async name => {
          localStorage.removeItem(name)
        },
        // Async is optional since localStorage is synchronous, but it's here to match the expected return type
      },
    },
  ),
)

export default useCartStore
