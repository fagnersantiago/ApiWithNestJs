import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProdutosModel } from './produtos.models';
import { ProdutoService } from './produtos.services';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutoService) {}

  @Get()
  async getAll(): Promise<ProdutosModel[]> {
    return this.produtosService.getAll();
  }

  @Post()
  async create(@Body() produto: ProdutosModel) {
    return this.produtosService.create(produto);
  }
}
