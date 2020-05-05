<?php

namespace App\Controller\API;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProductController extends AbstractController
{
    /**
     * @Route("/api/products", name="api_product")
     */
    public function browseProducts(ProductRepository $productRepository, SerializerInterface $serializer)
    {
        // Récupère tous les produits
        $product = $productRepository->findAll([]);

        // on utilise le serializer pour normaliser notre objet Product
        $data = $serializer->normalize($product, null, ['groups' => 'product']);

        return $this->json($data , 200,[], ["groups" => ["product"]]);
    }
}
