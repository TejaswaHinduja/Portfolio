import type { UnistTree } from "@/types/unist";

export function remarkComponent() {
  // Simplified version - no registry components needed
  return async (tree: UnistTree) => {
    // No-op for now since we removed component registry
    return tree;
  };
}
