import { BigInt } from "@graphprotocol/graph-ts"
import {
	AddSymbol,
	EmergencyClosePosition,
	FillCloseRequest,
	ForceClosePosition,
	LiquidatePositionsPartyA,
	LiquidatePositionsPartyB,
	OpenPosition,
	SendQuote,
	SetSymbolTradingFee,
} from "../generated/SymmDataSource/symmio"
import { Account, Quote, Symbol } from "../generated/schema"
import { QuoteStatus } from "./config"
import { CloseRequestHandler } from "./handlers/SymmCloseRequestHandler"
import { LiquidatePositionsHandler } from "./handlers/SymmLiquidatePositionsHandler"
import { OpenPositionHandler } from "./handlers/SymmOpenPositionHandler"

export function handleSendQuote(event: SendQuote): void {
	let account = Account.load(event.params.partyA.toHexString())
	if (!account) return

	const quote = new Quote(event.params.quoteId.toString())
	quote.transaction = event.transaction.hash
	quote.quantity = event.params.quantity
	quote.symbolId = event.params.symbolId
	quote.account = event.params.partyA
	quote.positionType = event.params.positionType
	quote.orderType = event.params.orderType
	quote.closedAmount = BigInt.fromString("0")
	quote.avgClosedPrice = BigInt.fromString("0")
	quote.quoteStatus = QuoteStatus.PENDING
	quote.timestamp = event.block.timestamp
	quote.lastUpdate = event.block.timestamp
	quote.save()
}

export function handleAddSymbol(event: AddSymbol): void {
	let symbol = new Symbol(event.params.id.toString())
	symbol.name = event.params.name
	symbol.tradingFee = event.params.tradingFee
	symbol.timestamp = event.block.timestamp
	symbol.updateTimestamp = event.block.timestamp
	symbol.blockNumber = event.block.number
	symbol.save()
}

export function handleSetSymbolTradingFee(event: SetSymbolTradingFee): void {
	let symbol = Symbol.load(event.params.symbolId.toString())!
	symbol.tradingFee = event.params.tradingFee
	symbol.updateTimestamp = event.block.timestamp
	symbol.save()
}

export function handleOpenPosition(event: OpenPosition): void {
	const handler = new OpenPositionHandler(event)
	handler.handle()
}

export function handleFillCloseRequest(event: FillCloseRequest): void {
	const handler = new CloseRequestHandler(event)
	handler.handle()
}

export function handleEmergencyCloseRequest(event: EmergencyClosePosition): void {
	const handler = new CloseRequestHandler(event)
	handler.handle()
}

export function handleForceCloseRequest(event: ForceClosePosition): void {
	const handler = new CloseRequestHandler(event)
	handler.handle()
}

export function handleLiquidatePositionsPartyA(event: LiquidatePositionsPartyA): void {
	const handler = new LiquidatePositionsHandler(event)
	handler.handle()
}

export function handleLiquidatePositionsPartyB(event: LiquidatePositionsPartyB): void {
	const handler = new LiquidatePositionsHandler(event)
	handler.handle()
}
