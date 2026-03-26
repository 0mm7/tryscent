import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Enquete from "./pages/Enquete.tsx";
import TestAveugle from "./pages/TestAveugle.tsx";
import Coulisses from "./pages/Coulisses.tsx";
import Calculateur from "./pages/Calculateur.tsx";
import Boutique from "./pages/Boutique.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enquete" element={<Enquete />} />
          <Route path="/test-aveugle" element={<TestAveugle />} />
          <Route path="/coulisses" element={<Coulisses />} />
          <Route path="/calculateur" element={<Calculateur />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
