const { Contract, providers, utils } = require('ethers');
const addresses = require('../../lib/addresses');
const abi = require('../../lib/abis').Havven;
const ContractSettings = require('../contractSettings');

/** @constructor
 * @param contractSettings {ContractSettings}
 */
function Havven(contractSettings) {
  this.contractSettings = contractSettings || new ContractSettings();

  this.contract = new Contract(
    this.contractSettings.addressList['Havven'],
    abi,
    this.contractSettings.signer || this.contractSettings.provider
  );

  /**
   * setFeePeriodDuration - function - requires signer
   * @param duration {Number}
  
   **/
  this.setFeePeriodDuration = async duration => {
    return await this.contract.setFeePeriodDuration(duration);
  };

  /**
   * setIssuanceRatio - function - requires signer
   * @param _issuanceRatio {Number}
  
   **/
  this.setIssuanceRatio = async _issuanceRatio => {
    return await this.contract.setIssuanceRatio(_issuanceRatio);
  };

  /**
   * name - constant - doesn't require signer
   * @returns String
   **/
  this.name = async () => {
    return await this.contract.name();
  };

  /**
   * approve - function - requires signer
   * @param spender {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.approve = async (spender, value) => {
    return await this.contract.approve(spender, value);
  };

  /**
   * totalIssuanceData - constant - doesn't require signer
   * @returns Object
   **/
  this.totalIssuanceData = async () => {
    return await this.contract.totalIssuanceData();
  };

  /**
   * unlockedCollateral - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.unlockedCollateral = async account => {
    return await this.contract.unlockedCollateral(account);
  };

  /**
   * nominateNewOwner - function - requires signer
   * @param _owner {String<EthAddress>}
  
   **/
  this.nominateNewOwner = async _owner => {
    return await this.contract.nominateNewOwner(_owner);
  };

  /**
   * initiationTime - constant - doesn't require signer
   * @returns Number
   **/
  this.initiationTime = async () => {
    return await this.contract.initiationTime();
  };

  /**
   * totalSupply - constant - doesn't require signer
   * @returns Number
   **/
  this.totalSupply = async () => {
    return await this.contract.totalSupply();
  };

  /**
   * issueNomins - function - requires signer
   * @param amount {Number}
  
   **/
  this.issueNomins = async amount => {
    return await this.contract.issueNomins(amount);
  };

  /**
   * setSelfDestructBeneficiary - function - requires signer
   * @param _beneficiary {String<EthAddress>}
  
   **/
  this.setSelfDestructBeneficiary = async _beneficiary => {
    return await this.contract.setSelfDestructBeneficiary(_beneficiary);
  };

  /**
   * priceStalePeriod - constant - doesn't require signer
   * @returns Number
   **/
  this.priceStalePeriod = async () => {
    return await this.contract.priceStalePeriod();
  };

  /**
   * feePeriodDuration - constant - doesn't require signer
   * @returns Number
   **/
  this.feePeriodDuration = async () => {
    return await this.contract.feePeriodDuration();
  };

  /**
   * hasWithdrawnFees - constant - doesn't require signer
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.hasWithdrawnFees = async () => {
    return await this.contract.hasWithdrawnFees();
  };

  /**
   * transferFrom - function - requires signer
   * @param from {String<EthAddress>}
   * @param to {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.transferFrom = async (from, to, value) => {
    return await this.contract.transferFrom(from, to, value);
  };

  /**
   * issuanceDraft - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.issuanceDraft = async account => {
    return await this.contract.issuanceDraft(account);
  };

  /**
   * setPriceStalePeriod - function - requires signer
   * @param time {Number}
  
   **/
  this.setPriceStalePeriod = async time => {
    return await this.contract.setPriceStalePeriod(time);
  };

  /**
   * decimals - constant - doesn't require signer
   * @returns Number
   **/
  this.decimals = async () => {
    return await this.contract.decimals();
  };

  /**
   * burnNomins - function - requires signer
   * @param amount {Number}
  
   **/
  this.burnNomins = async amount => {
    return await this.contract.burnNomins(amount);
  };

  /**
   * terminateSelfDestruct - function - requires signer
  
   **/
  this.terminateSelfDestruct = async () => {
    return await this.contract.terminateSelfDestruct();
  };

  /**
   * withdrawFees - function - requires signer
  
   **/
  this.withdrawFees = async () => {
    return await this.contract.withdrawFees();
  };

  /**
   * setIssuer - function - requires signer
   * @param account {String<EthAddress>}
   * @param value {boolean}
  
   **/
  this.setIssuer = async (account, value) => {
    return await this.contract.setIssuer(account, value);
  };

  /**
   * lastPriceUpdateTime - constant - doesn't require signer
   * @returns Number
   **/
  this.lastPriceUpdateTime = async () => {
    return await this.contract.lastPriceUpdateTime();
  };

  /**
   * nominatedOwner - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.nominatedOwner = async () => {
    return await this.contract.nominatedOwner();
  };

  /**
   * setNomin - function - requires signer
   * @param _nomin {String<EthAddress>}
  
   **/
  this.setNomin = async _nomin => {
    return await this.contract.setNomin(_nomin);
  };

  /**
   * recomputeLastAverageBalance - function - requires signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.recomputeLastAverageBalance = async account => {
    return await this.contract.recomputeLastAverageBalance(account);
  };

  /**
   * nominsIssued - constant - doesn't require signer
   * @param  {String<EthAddress>}
   * @returns Number
   **/
  this.nominsIssued = async () => {
    return await this.contract.nominsIssued();
  };

  /**
   * issuanceLastAverageBalance - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.issuanceLastAverageBalance = async account => {
    return await this.contract.issuanceLastAverageBalance(account);
  };

  /**
   * balanceOf - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.balanceOf = async account => {
    return await this.contract.balanceOf(account);
  };

  /**
   * feePeriodStartTime - constant - doesn't require signer
   * @returns Number
   **/
  this.feePeriodStartTime = async () => {
    return await this.contract.feePeriodStartTime();
  };

  /**
   * acceptOwnership - function - requires signer
  
   **/
  this.acceptOwnership = async () => {
    return await this.contract.acceptOwnership();
  };

  /**
   * setOracle - function - requires signer
   * @param _oracle {String<EthAddress>}
  
   **/
  this.setOracle = async _oracle => {
    return await this.contract.setOracle(_oracle);
  };

  /**
   * oracle - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.oracle = async () => {
    return await this.contract.oracle();
  };

  /**
   * maxIssuableNomins - constant - doesn't require signer
   * @param issuer {String<EthAddress>}
   * @returns Number
   **/
  this.maxIssuableNomins = async issuer => {
    return await this.contract.maxIssuableNomins(issuer);
  };

  /**
   * updatePrice - function - requires signer
   * @param newPrice {Number}
   * @param timeSent {Number}
  
   **/
  this.updatePrice = async (newPrice, timeSent) => {
    return await this.contract.updatePrice(newPrice, timeSent);
  };

  /**
   * isIssuer - constant - doesn't require signer
   * @param  {String<EthAddress>}
   * @returns boolean
   **/
  this.isIssuer = async () => {
    return await this.contract.isIssuer();
  };

  /**
   * issuanceData - constant - doesn't require signer
   * @param  {String<EthAddress>}
   * @returns Object
   **/
  this.issuanceData = async () => {
    return await this.contract.issuanceData();
  };

  /**
   * owner - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.owner = async () => {
    return await this.contract.owner();
  };

  /**
   * lockedCollateral - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.lockedCollateral = async account => {
    return await this.contract.lockedCollateral(account);
  };

  /**
   * rolloverFeePeriodIfElapsed - function - requires signer
  
   **/
  this.rolloverFeePeriodIfElapsed = async () => {
    return await this.contract.rolloverFeePeriodIfElapsed();
  };

  /**
   * totalIssuanceLastModified - constant - doesn't require signer
   * @returns Number
   **/
  this.totalIssuanceLastModified = async () => {
    return await this.contract.totalIssuanceLastModified();
  };

  /**
   * symbol - constant - doesn't require signer
   * @returns String
   **/
  this.symbol = async () => {
    return await this.contract.symbol();
  };

  /**
   * setProxy - function - requires signer
   * @param _proxy {String<EthAddress>}
  
   **/
  this.setProxy = async _proxy => {
    return await this.contract.setProxy(_proxy);
  };

  /**
   * selfDestruct - function - requires signer
  
   **/
  this.selfDestruct = async () => {
    return await this.contract.selfDestruct();
  };

  /**
   * UNIT - constant - doesn't require signer
   * @returns Number
   **/
  this.UNIT = async () => {
    return await this.contract.UNIT();
  };

  /**
   * setTokenState - function - requires signer
   * @param _tokenState {String<EthAddress>}
  
   **/
  this.setTokenState = async _tokenState => {
    return await this.contract.setTokenState(_tokenState);
  };

  /**
   * price - constant - doesn't require signer
   * @returns Number
   **/
  this.price = async () => {
    return await this.contract.price();
  };

  /**
   * USDtoHAV - constant - doesn't require signer
   * @param usd_dec {Number}
   * @returns Number
   **/
  this.USDtoHAV = async usd_dec => {
    return await this.contract.USDtoHAV(usd_dec);
  };

  /**
   * SELFDESTRUCT_DELAY - constant - doesn't require signer
   * @returns Number
   **/
  this.SELFDESTRUCT_DELAY = async () => {
    return await this.contract.SELFDESTRUCT_DELAY();
  };

  /**
   * collateral - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.collateral = async account => {
    return await this.contract.collateral(account);
  };

  /**
   * transfer - function - requires signer
   * @param to {String<EthAddress>}
   * @param value {Number}
   * @returns boolean
   **/
  this.transfer = async (to, value) => {
    return await this.contract.transfer(to, value);
  };

  /**
   * issuanceRatio - constant - doesn't require signer
   * @returns Number
   **/
  this.issuanceRatio = async () => {
    return await this.contract.issuanceRatio();
  };

  /**
   * selfDestructInitiated - constant - doesn't require signer
   * @returns boolean
   **/
  this.selfDestructInitiated = async () => {
    return await this.contract.selfDestructInitiated();
  };

  /**
   * setMessageSender - function - requires signer
   * @param sender {String<EthAddress>}
  
   **/
  this.setMessageSender = async sender => {
    return await this.contract.setMessageSender(sender);
  };

  /**
   * initiateSelfDestruct - function - requires signer
  
   **/
  this.initiateSelfDestruct = async () => {
    return await this.contract.initiateSelfDestruct();
  };

  /**
   * lastFeesCollected - constant - doesn't require signer
   * @returns Number
   **/
  this.lastFeesCollected = async () => {
    return await this.contract.lastFeesCollected();
  };

  /**
   * setEscrow - function - requires signer
   * @param _escrow {String<EthAddress>}
  
   **/
  this.setEscrow = async _escrow => {
    return await this.contract.setEscrow(_escrow);
  };

  /**
   * totalIssuanceLastAverageBalance - constant - doesn't require signer
   * @returns Number
   **/
  this.totalIssuanceLastAverageBalance = async () => {
    return await this.contract.totalIssuanceLastAverageBalance();
  };

  /**
   * issuanceCurrentBalanceSum - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.issuanceCurrentBalanceSum = async account => {
    return await this.contract.issuanceCurrentBalanceSum(account);
  };

  /**
   * selfDestructBeneficiary - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.selfDestructBeneficiary = async () => {
    return await this.contract.selfDestructBeneficiary();
  };

  /**
   * remainingIssuableNomins - constant - doesn't require signer
   * @param issuer {String<EthAddress>}
   * @returns Number
   **/
  this.remainingIssuableNomins = async issuer => {
    return await this.contract.remainingIssuableNomins(issuer);
  };

  /**
   * lastFeePeriodStartTime - constant - doesn't require signer
   * @returns Number
   **/
  this.lastFeePeriodStartTime = async () => {
    return await this.contract.lastFeePeriodStartTime();
  };

  /**
   * totalIssuanceCurrentBalanceSum - constant - doesn't require signer
   * @returns Number
   **/
  this.totalIssuanceCurrentBalanceSum = async () => {
    return await this.contract.totalIssuanceCurrentBalanceSum();
  };

  /**
   * issueMaxNomins - function - requires signer
  
   **/
  this.issueMaxNomins = async () => {
    return await this.contract.issueMaxNomins();
  };

  /**
   * HAVtoUSD - constant - doesn't require signer
   * @param hav_dec {Number}
   * @returns Number
   **/
  this.HAVtoUSD = async hav_dec => {
    return await this.contract.HAVtoUSD(hav_dec);
  };

  /**
   * allowance - constant - doesn't require signer
   * @param owner {String<EthAddress>}
   * @param spender {String<EthAddress>}
   * @returns Number
   **/
  this.allowance = async (owner, spender) => {
    return await this.contract.allowance(owner, spender);
  };

  /**
   * transferableHavvens - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.transferableHavvens = async account => {
    return await this.contract.transferableHavvens(account);
  };

  /**
   * escrow - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.escrow = async () => {
    return await this.contract.escrow();
  };

  /**
   * nomin - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.nomin = async () => {
    return await this.contract.nomin();
  };

  /**
   * tokenState - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.tokenState = async () => {
    return await this.contract.tokenState();
  };

  /**
   * proxy - constant - doesn't require signer
   * @returns String<EthAddress>
   **/
  this.proxy = async () => {
    return await this.contract.proxy();
  };

  /**
   * issuanceLastModified - constant - doesn't require signer
   * @param account {String<EthAddress>}
   * @returns Number
   **/
  this.issuanceLastModified = async account => {
    return await this.contract.issuanceLastModified(account);
  };

  /**
   * priceIsStale - constant - doesn't require signer
   * @returns boolean
   **/
  this.priceIsStale = async () => {
    return await this.contract.priceIsStale();
  };
}

module.exports = Havven;